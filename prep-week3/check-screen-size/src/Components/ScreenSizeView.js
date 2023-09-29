import useScreenSize from '../Hooks/useScreenSize';

const ScreenSizeView = () => {
  const { width, height } = useScreenSize();

  return (
    <div>
      <div>Height : {height} px </div>
      <div>Width: {width} px </div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export { ScreenSizeView };
