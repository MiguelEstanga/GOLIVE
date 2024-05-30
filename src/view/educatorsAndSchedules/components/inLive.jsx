import { AvatarInlive } from "./Styled";

export default function InLive({url_avatar , borderColor}) {
    return (
       <AvatarInlive
            colorborder={borderColor}
       >
            <img  width={'100%'}  style={{'border-radius': '50%'}} src={url_avatar} alt="avatar"/>
       </AvatarInlive>
    )
}