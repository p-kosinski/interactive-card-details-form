type Props = {
  children?: string | undefined;
  onClick: () => any;
};

const Button: React.FC<Props> = ({ children, onClick }) => (
  <button
    className='w-full rounded-lg transition-colors ease-in-out duration-75 bg-accent hover:bg-active2 text-white py-4 text-heading-l'
    onClick={() => onClick()}
  >
    {children}
  </button>
);

export default Button;
