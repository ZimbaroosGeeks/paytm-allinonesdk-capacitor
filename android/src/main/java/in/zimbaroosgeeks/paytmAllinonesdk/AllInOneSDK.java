package in.zimbaroosgeeks.paytmAllinonesdk;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.paytm.pgsdk.PaytmOrder;
import com.paytm.pgsdk.PaytmPaymentTransactionCallback;
import com.paytm.pgsdk.TransactionManager;

@CapacitorPlugin(
    name="AllInOneSDK"
    // requestCodes = {AllInOneSDK.REQ_CODE}
    )

public class AllInOneSDK extends Plugin {
    protected static final int REQ_CODE = 0;

    @PluginMethod
    public void startTransaction(final PluginCall call) {
        saveCall(call);
        String orderId = call.getString("orderId");
        String mid = call.getString("mid");
        String txnToken = call.getString("txnToken");
        String amount = call.getString("amount");
        String callbackUrl = call.getString("callbackUrl");
        boolean isStaging = call.getBoolean("isStaging");
        if (orderId == null || mid == null || txnToken == null || amount == null ||
        orderId.isEmpty() || mid.isEmpty() || txnToken.isEmpty() || amount.isEmpty()) {
            if (txnToken == null || txnToken.isEmpty()) {
                Toast.makeText(getContext(), "txnToken error", Toast.LENGTH_LONG).show();
            } 
            else {
                Toast.makeText(getContext(), "Please enter all field", Toast.LENGTH_LONG).show();
            }
            return;
        }
        String host = "https://securegw.paytm.in/";
        if (isStaging) {
                host = "https://securegw-stage.paytm.in/";
        }
        if(callbackUrl == null || callbackUrl.trim().isEmpty()) {
                callbackUrl = host + "theia/paytmCallback?ORDER_ID=" + orderId;
        }

        PaytmOrder paytmOrder = new PaytmOrder(orderId, mid, txnToken, amount, callbackUrl);
        TransactionManager transactionManager = new TransactionManager(  paytmOrder, new PaytmPaymentTransactionCallback() {

            @Override
            public void onTransactionResponse(Bundle bundle) {
                Log.d("LOG", "Payment Transaction is successful " + bundle);
                setResult("Payment Transaction response " + bundle.toString(), call);
            }

            @Override
            public void networkNotAvailable() {
                setResult("networkNotAvailable", call);
            }

            @Override
            public void onErrorProceed(String s) {
                setResult(s, call);
            }

            @Override
            public void clientAuthenticationFailed(String s) {
                setResult(s, call);
            }

            @Override
            public void someUIErrorOccurred(String s) {
                setResult(s, call);
            }

            @Override
            public void onErrorLoadingWebPage(int i, String s, String s1) {
                setResult("Erro to load web page", call);
            }

            @Override
            public void onBackPressedCancelTransaction() {
                setResult("onBackPressedCancelTransaction", call);
            }


            @Override
            public void onTransactionCancel(String s, Bundle bundle) {
                setResult(s + " " + bundle, call);
            }
        });
        transactionManager.setShowPaymentUrl(host + "theia/api/v1/showPaymentPage");
        transactionManager.startTransaction(getActivity(), REQ_CODE);
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);
        if (requestCode == REQ_CODE && data != null) {
            PluginCall call = getSavedCall();
            setResult(data.getStringExtra("nativeSdkForMerchantMessage") + 
            data.getStringExtra("response"), call);
        }
    }

    private void setResult(String message, PluginCall call) {
        if (call != null) {
            JSObject result = new JSObject();
            result.put("result", message);
            call.resolve(result);
        } 
        else {
            Toast.makeText(getContext(), "call is null", Toast.LENGTH_LONG).show();
        }
    }
}
