import React from 'react';
import { getCurrentUser } from '../../reducers/selectors'
import { hashHistory } from 'react-router';

export default class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      reward_id: this.props.reward.reward_id,
      backer_id : "",
      backers: "",
      errors: "",
      styleClass: "show-reward-index-item",
      amount: ""
    };
    this.displayBackers = this.displayBackers.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.checkPath = this.checkPath.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  checkPath(){
    const currentPath = location.hash;
    return currentPath.includes("rewards");
  }

  componentDidMount(){
    if (this.checkPath()){
      this.setState({ styleClass: "show-reward-index-item" })
    } else {
      this.setState({ styleClass: "reward-index-item" })
    }
  }


  handleClick(e){
    e.preventDefault();
    this.checkLoggedIn();
    if (this.checkPath() === true){
      const reward = e.currentTarget;
      const rewardForm = reward.children[6].children;
      const inputText  = rewardForm[0];
      const inputButton = rewardForm[1];
      inputText.style.display = "block";
      inputButton.style.display = "block";
    } else {
      const { project } = this.props;
      hashHistory.push(`/projects/${project.id}/rewards`);
    }
  }


//     const amount = this.props.reward.amount;
//     if (!(this.props.currentUser === null)){
//       this.props.updateProjectStatus(amount);
//       if (this.state.backer_id){
//         this.props.createBacking(this.state);
//       }
//       if (!(this.props.reward.backers.includes(this.props.currentUser))){
//         this.setState({backers: this.props.reward.backers.length += 1})
//     }
//   }
// }

checkLoggedIn(){
  const currentUser = this.props.currentUser;
  if (currentUser === null){
    this.setState({errors: "Log in or Sign up to back a project"})
    hashHistory.push('/signup')
  }
}

handleSubmit(e){
  e.preventDefault();
  const formData = new FormData();

}

update(property){
  return (e) => {
    this.setState({[property]: e.target.value})
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

    const rewardId = this.state.rewardId;
    const { reward } = this.props;
    return (
      <div className={this.state.styleClass} onClick={this.handleClick}>
      <h2 className="pledge-amt">Contribute ${reward.amount} or more</h2>
      <h3 className="reward-item-name">{reward.title}</h3>
      <div className="reward-item-desc">{reward.body}</div>
      <div className="reward-item-backers">{this.displayBackers()}</div>
      <div className="reward-item-errors">{this.state.errors}</div>
      <div className="reward-input-div"></div> Pledge Amount:
        <form className="reward-form" onSubmit={this.handleSubmit}>
        <input id="reward-input" type="text" onChange={this.update('amount')}/>
        <input id="submit-button" type="submit" value="Quack Start!"
          className="form-submit-button"/>
        </form>
      </div>
    )
  }
}
