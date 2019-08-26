import styled from 'styled-components/native';

export const Container = styled.View `
  flex:1;
  background-color:#111;
`;

export const EpisodeList = styled.FlatList.attrs({
    contentContainerStyle: {paddinBottom:30},
}) ``;

export const PodcastDetails = styled.View `
    padding :0 0 20px;
    align-items: center;
    padding-top: 20px;
`;

export const Background = styled.ImageBackground `
    position: absolute;
    width: 100%;
    height: 360px;
    opacity: 0.2;
`;

export const BackButton = styled.TouchableOpacity.attrs({
    hitSlop:{
        top:20, left:20, right:20, bottom:20,
    },
}) `
    position:absolute;
    left: 30px;
    top: 20px;
`;

export const Cover = styled.Image `
    width: 200px;
    height :200px;
    border-radius: 8px;
`;

export const PodcastTitle = styled.Text `
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    margin-top: 20px;
`;

export const PlayButton = styled.TouchableOpacity `
    height: 50px;
    background: #1db954;
    margin: 30px 40px 0;
    border-radius: 25px;

    align-self: stretch;
    align-items: center;
    justify-content: center;

`;

export const PlayButtonText = styled.Text `
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1.5px;
`;

export const Episode = styled.TouchableOpacity `
    margin-top: 20px;
    padding: 0 20px;
`;

export const Title = styled.Text `
    font-size: 16px;
    color:${({active})=>active?'#1db954':'#fff'};
`;

export const Author = styled.Text `
    color: #c4c4c4;
    font-size: 14px;
    margin-top: 3px;
`;