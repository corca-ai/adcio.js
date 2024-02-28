// [dev only] document write is for development only not for production
document.write(
  '<script src="https://cdn.adcio.ai/clients/76dc12fa-5a73-4c90-bea5-d6578f9bc606/common.js"></script>',
);
document.write(
  '<script src="https://cdn.adcio.ai/clients/76dc12fa-5a73-4c90-bea5-d6578f9bc606/mo-banner.js"></script>',
);
document.write(
  '<script src="https://cdn.adcio.ai/clients/76dc12fa-5a73-4c90-bea5-d6578f9bc606/mo-grid.js"></script>',
);

new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
}).collectLogs(adcio.clientApi.cafe24);
