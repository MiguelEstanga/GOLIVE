function ProgressBar({ data }) {
    return (
        <div>
            {data.map((_, index) => (
                <div className="progress-information" key={index}> 
                    <span></span>
                    <p>{`${index}. clase ${index}`}</p>
                </div>
            ))}
        </div>
    );
}

export { ProgressBar };