export interface ButtonProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonComponent: React.FC<{ buttonProps: ButtonProps }> = ({
  buttonProps,
}) => {
  const {
    title,
    backgroundColor = "orangeColor",
    textColor = "white",
  } = buttonProps;
  return (
    <>
      <button
        type="submit"
        onClick={buttonProps.onClick}
        className={`bg-${backgroundColor} w-full h-48 text-${textColor} font-bold shadow-custom `}
      >
        {title}
      </button>
    </>
  );
};

export default ButtonComponent;
