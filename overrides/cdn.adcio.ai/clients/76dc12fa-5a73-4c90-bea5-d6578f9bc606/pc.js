// [dev only] document write is for development only not for production
document.write(
  '<script src="https://cdn.adcio.ai/clients/76dc12fa-5a73-4c90-bea5-d6578f9bc606/pc-banner.js"></script>',
);
document.write(
  '<script src="https://cdn.adcio.ai/clients/76dc12fa-5a73-4c90-bea5-d6578f9bc606/pc-grid.js"></script>',
);

//Collect Logs
const adcioInstance = new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
});
adcioInstance.collectLogs(adcio.clientApi.cafe24);
