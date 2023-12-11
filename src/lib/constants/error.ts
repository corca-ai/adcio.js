export const ERROR_CODE = {
  SUGGESTION: {
    PLACEMENT_NOT_FOUND: 12_001,
    INVALID_PLACEMENT_TYPE: 12_003,
    NO_ACTIVATED_PLACEMENT: 12_004,
  },
};

export const PLACEMENT_ERROR_MESSAGE = {
  PLACEMENT_NOT_FOUND:
    "Failed to suggestions: The placement id is not registered",
  NO_ACTIVATED_PLACEMENT: "Failed to suggestions: The placement is not active",
  NOT_UUID: "placementId must be a UUID",
  UNKNOWN_ERROR: "Failed to suggestions: An unknown error occurred",
};
