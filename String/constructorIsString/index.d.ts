var constructorIsString: {
  (value: string | String): true;
  (value: unknown): value is string;
}

export default constructorIsString;
