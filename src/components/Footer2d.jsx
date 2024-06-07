import { FoooterContainer } from "./Styled";

export default function Footer2d( {
  position = 'absolute',
  mt = '90px'
} ) {
    return (
      <FoooterContainer
        position={position}
        mt={mt}
      >
        <div className="img-text">
          <img width={'100%'}  src={require('../asset/footer.png')} alt="footer-logo" />
        </div>
      </FoooterContainer>
    )
}