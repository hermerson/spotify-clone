import React from 'react';
import {Container, CoverBackground, EpisodeInfo, Title, Author, Controls, ControlButton, ControlIncon} from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayerActions from  '~/store/ducks/player';

const Player = ({player, currentEpisode, play, pause, next, prev}) => player.current && (
    <Container>
        <CoverBackground source={{uri: currentEpisode.artwork}}/>
        <EpisodeInfo>
            <Title>{currentEpisode.title}</Title>
            <Author>{currentEpisode.artist}</Author>
        </EpisodeInfo>

        <Controls>

            <ControlButton  onPress={()=>{prev()}}>
                <ControlIncon name="skip-previous"/>
            </ControlButton>

            <ControlButton onPress={()=>{!player.playing?play():pause()}}>
                <ControlIncon name={!player.playing?"play-circle-filled":"pause-circle-filled"}/>
            </ControlButton>

            <ControlButton onPress={()=>{next()}}>
                <ControlIncon name="skip-next"/>
            </ControlButton>

        </Controls>
    </Container>
);

const mapStateToProps = state =>({
    player:state.player,
    currentEpisode: state.player.podcast ? state.player.podcast.tracks.find(episode =>episode.id == state.player.current) : null,
    
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);