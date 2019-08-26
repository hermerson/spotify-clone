import React from 'react';
import {Container, Title, PageTitle, PodcastList, Podcast, Cover, Info, Count, } from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PodcastsActions from '~/store/ducks/podcasts';

class Main extends React.Component{

  componentDidMount(){
    
    this.props.loadRequest();
    
    
  }

  handlePodcastsPress = (podcast) =>{
    const {navigation} = this.props;
    navigation.navigate('Podcast', {podcast});

  }
  
  render(){
    const {podcasts} = this.props;
    return(
      <Container>
        <PodcastList ListHeaderComponent={()=><PageTitle>Podcasts</PageTitle>} data={podcasts.data} keyExtractor={podcast=>String(podcast.id)} renderItem={({item:podcast})=>(
          <Podcast onPress={()=>{this.handlePodcastsPress(podcast)}}>
            <Cover source={{uri:podcast.cover}} />
            <Info>
              <Title>{podcast.title}</Title>
              <Count>{`${podcast.tracks.length} episódios`}</Count>
            </Info>
          </Podcast>
        )}/>
      </Container>
    );
  }

}

const mapStateToProps = state =>({
  podcasts:state.podcasts,

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);