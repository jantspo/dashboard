export default function LoadingSpinner() {
    return (
        <div className="LoadingSpinner">
            <div>
                <i className="fas fa-spinner fa-spin" />
            </div>

            <h3>Loading...</h3>
            <style jsx>{`
                .LoadingSpinner{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: calc(100vh - 60px);
                    justify-content: center;
                }
                
                .LoadingSpinner h3{
                    color: #F05F40;
                }
            
                i{
                    color: #F05F40;
                    font-size: 5rem;
                }
            `}</style>
        </div>
    )
}