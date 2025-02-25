const RoundedImage = ({ src }) => {
    return (
      <div className="relative w-64 h-64">
        <img
          src={src}
          alt="Rounded"
          className="w-full h-full object-cover"
          style={{ clipPath: "url(#roundedMask)" }}
        />
        {/* Include SVG in your JSX so the clipPath is available */}
        <svg width="0" height="0">
          <defs>
            <clipPath id="roundedMask" clipPathUnits="objectBoundingBox">
              <path d="M0.1,0 C0.3,0, 0.7,0, 0.9,0 C1,0, 1,0.1, 1,0.3 C1,0.7, 1,0.9, 0.9,1 C0.7,1, 0.3,1, 0.1,1 C0,1, 0,0.9, 0,0.7 C0,0.3, 0,0.1, 0.1,0 Z"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  };
  
  export default RoundedImage;
  