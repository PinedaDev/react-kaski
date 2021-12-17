import './css/FooterContainer.css'

const FooterContainer = ({ containerTitle, content }) => {

    const dootsList = [];

    function range() {
        for (let i = 0; i < 11; i++) {
            dootsList.push("" + i)
        }
    }

    range();

    const dootsDiv = () => {
        return (
            dootsList.map((dot) => {
                return (
                    <div key={dot} className='doot'></div>
                );
            })
        );
    }

    const showContent = () => {
        return (
            content.map((item) => {
                return (
                    <div key={item.id}>
                        <p className='title'>{item.title}</p>
                        <p className='sub-text'>{item.subtext}</p>
                    </div>
                )
            })
        )
    }

    return (
        <div className='footer-container'>
            <p className='column-title'>{containerTitle}</p>

            <div className='doots-container'>
                {dootsDiv()}
            </div>

            <div className='container-content'>
                {showContent()}
            </div>
        </div>
    );
}

export default FooterContainer;