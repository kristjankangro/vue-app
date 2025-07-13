/**
 * Defines the shape of the validation rules object.
 *
 * @property required - If true, the field cannot be empty.
 * @property min - The minimum required length for the string value.
 */
export interface Rules {
  required?: boolean;
  min?: number;
}