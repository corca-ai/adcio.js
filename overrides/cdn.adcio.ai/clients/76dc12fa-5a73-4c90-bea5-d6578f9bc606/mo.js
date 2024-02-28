const adcioInstance = new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
});

//Collect Logs
adcioInstance.collectLogs(adcio.clientApi.cafe24);
