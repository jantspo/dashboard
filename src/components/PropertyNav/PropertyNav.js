import styled from 'styled-components';
import PropertyBottomNav from './PropertyBottomNav';
import PropertySideNav from './PropertySideNav';

const PropertyNavDiv = styled.div`
    width: 240px;
    height: calc( 100vh - 60px);
    background-color: #fff;
    display: inline-block;
`;

const LinkWrapper = styled.div`
    padding-left: 25px;
`;

export default function PropertyNav() {
    return (
        <div className="PropertyNav">
            <div className="side-nav">
                <PropertySideNav  />
            </div>
            <div className="bottom-nav">
                <PropertyBottomNav className="bottom-nav" />
            </div>
            <style jsx>{`     
                .bottom-nav{
                    display: inline-block
                }
                .side-nav{
                    display: inline-block
                }
                
                @media screen and (min-width: 1080px) {
                    .bottom-nav{
                        display: none
                    }
                }
                
                @media screen and (max-width: 1079px) {
                    .side-nav{
                        display: none
                    }
                }
                
                .PropertyNav{
                    display:inline-block
                }
            `}</style>
        </div>

    );
}