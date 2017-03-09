import React from 'react';
import { getCurrentUser } from '../../reducers/selectors'

export default class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      reward_id: this.props.reward.reward_id,
      backer_id : "",
      backers: "",
      errors: "",
      styleClass: ""
    };
    this.displayBackers = this.displayBackers.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.checkPath = this.checkPath.bind(this);
  }

  componentDidMount(){
    if (this.checkPath()){
      this.setState({ styleClass: "show-reward-index-item" })
    } else {
      this.setState({ styleClass: "reward-index-item" })
    }
  }

  checkPath(){
    const currentPath = location.hash;
    return currentPath.includes("rewards");
  }

  handleClick(e){
    e.preventDefault();
    const { project } = this.props;

    this.checkLoggedIn();

    if (this.checkPath()){
      const inputText = document.getElementById("reward-input");
      inputText.style.display = "block";

    }
  }


  //   const amount = this.props.reward.amount;
  //   if (!(this.props.currentUser === null)){
  //     this.props.updateProjectStatus(amount);
  //     if (this.state.backer_id){
  //       this.props.createBacking(this.state);
  //     }
  //     if (!(this.props.reward.backers.includes(this.props.currentUser))){
  //       this.setState({backers: this.props.reward.backers.length += 1})
  //   }
  // }

checkLoggedIn(){
  const currentUser = this.props.currentUser;
  if (currentUser === null){
    this.setState({errors: "Log in or Sign up to back a project"})
    hashHistory.push('/signup')
  }
}



  displayBackers(){
    if (this.props.reward.backers !== null){
      const backers = this.props.reward.backers
      const uniqueBackers = [];
      for (var i = 0; i < backers.length; i++) {
        const username = backers[i].username;
        if (!uniqueBackers.includes(username)){
          uniqueBackers.push(username);
        }
      }
        if (uniqueBackers.length === 1){
          return "1 backer";
        } else {
          return `${uniqueBackers.length} backers`;
        }
    }
  }

  render(){
    return (
      <div className={this.state.styleClass} onClick={this.handleClick}>
      <h2 className="pledge-amt">Contribute ${this.props.reward.amount} or more</h2>
      <h3 className="reward-item-name">{this.props.reward.title}</h3>
      <div className="reward-item-desc">{this.props.reward.body}</div>
      <div className="reward-item-backers">{this.displayBackers()}</div>
      <div className="reward-item-errors">{this.state.errors}</div>
      <div id="reward-input-div"></div> Pledge Amount:
        <input id="reward-input" type="text" hidden/>
      </div>
    )
  }
}
