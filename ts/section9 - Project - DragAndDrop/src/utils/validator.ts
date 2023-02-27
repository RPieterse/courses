// Validation
export interface ValidationConfig {
  value: string | number | boolean;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(config: ValidationConfig) {
  let isValid = true;

  if (
    Object.getOwnPropertyNames(config).includes("isRequired") &&
    (!isValid || !config.value?.toString().trim())
  ) {
    isValid = false;
  }
  if (
    config.minLength &&
    (!isValid || config.value?.toString().length < config.minLength)
  ) {
    isValid = false;
  }
  if (
    config.maxLength &&
    (!isValid || config.value?.toString().length > config.maxLength)
  ) {
    isValid = false;
  }
  if (config.min && (!isValid || +config.value < config.min)) {
    isValid = false;
  }
  if (config.max && (!isValid || +config.value > config.max)) {
    isValid = false;
  }

  return isValid;
}
