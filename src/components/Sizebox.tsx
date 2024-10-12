interface sizeboxProps {
  width?: number;
  height?: number;
}

const Sizebox = ({ width, height }: sizeboxProps) => {
  return (
    <>
      <div style={{ width, height }}></div>
    </>
  );
};

export default Sizebox;
