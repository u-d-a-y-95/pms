import { isCuid } from '@paralleldrive/cuid2';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
class IsCuidConstraint implements ValidatorConstraintInterface {
  validate(value: string) {
    return value.length === 24 && isCuid(value);
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} is not valid id`;
  }
}

export function IsCuid(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCuidConstraint,
    });
  };
}
