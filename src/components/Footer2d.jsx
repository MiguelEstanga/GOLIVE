import { FoooterContainer } from "./Styled";

export default function Footer2d( {
  position = 'absolute',
  marginTop = 'auto',
} ) {
    return (
      <FoooterContainer
        position={position}
        marginTop={marginTop}
      >
        <div className="img-text">
         <img width={'100%'} height={'40px'} src="https://golive.softus.de/assets/assets/images/im-logo-blanco.png" alt="footer-logo" />

        </div>
      </FoooterContainer>
    )
}