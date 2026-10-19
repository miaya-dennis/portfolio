function PhotoControls ({ onNext, onPrevious, onInvert, noInvert }) {
  return(
    <p>
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
        <button onClick={onInvert}>Invert</button>
        <button onClick={noInvert}>No Invert</button>
    </p>
  )
}

export default PhotoControls 