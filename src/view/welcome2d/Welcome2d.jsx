import ScoolCart from "../../components/ScoolCart";
import Footer2d from "../../components/Footer2d";
import { DivContainer, Welcome , Subtitle, ContainerScool } from "./Styled";
import Menu from "../../components/Menu";
export default function Welcome2d() {

  const test = [
    {'titulo' : 'titulo1' ,  color:"#145a32"},
    {'titulo' : 'titulo2' ,  color:"#f4d03f"},
    {'titulo' : 'titulo3' ,  color:"#ba4a00"},
    {'titulo' : 'titulo4' ,  color:"#1b4f72"},
    {'titulo' : 'titulo5' ,  color:"#145a32"},

  ];

  return (
    <>
   
    <DivContainer>
         <Menu/>
        <div className="container-welcome">
            <div className="container-titulo-welcome">
                <Welcome>
                    BIENVENIDO
                </Welcome>
                <Subtitle>
                    Oran Wright
                </Subtitle>
                
            </div>
            <ContainerScool>
                    {
                      test.map(  items => (
                        <ScoolCart  
                            color={items.color}
                            titulo={items.titulo}
                            logo_text={'https://golive.softus.de/assets/assets/images/IM-logo.png'}
                            
                        />
                      ) )
                    }
            </ContainerScool>
            
        </div>
        <Footer2d/>
    </DivContainer>
    </>
  );
}