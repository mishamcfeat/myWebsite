const BubbleImage = ({ src, alt }) => {
  return (
      <div className="w-64 h-64 rounded-full border-4 overflow-hidden relative bg-white">
          <img src={src} alt={alt} className="object-cover w-full h-full" />
      </div>
  );
}

export default BubbleImage;