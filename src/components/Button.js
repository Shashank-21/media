import className from "classnames";
import { GoSync } from "react-icons/go";

function Button({
  children,
  primary,
  secondary,
  tertiary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border h-8",
    {
      "opacity-70": loading,
      "border-blue-800 bg-blue-800 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-purple-900 bg-purple-900 text-white": tertiary,
      "border-green-700 bg-green-700 text-white": success,
      "border-yellow-300 bg-yellow-300 text-black": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-purple-900": outline && tertiary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    tertiary,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!tertiary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
