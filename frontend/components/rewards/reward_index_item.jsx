import React from 'react';
import { getCurrentUser } from '../../reducers/selectors'
import { hashHistory } from 'react-router';

export default class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reward_id: this.props.reward.reward_id,
      backer_id : "",
      project_id: this.props.project.id,
      errors: "",
      backers: this.props.reward.backers,
      styleClass: "show-reward-index-item",
      amount: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.displayBackers = this.displayBackers.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.checkPath = this.checkPath.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
      const rewardForm = e.currentTarget.nextElementSibling
      rewardForm.style.display = "block";
    } else {
      const { project } = this.props;
      hashHistory.push(`/projects/${project.id}/rewards`);
    }
  }

  handleSubmit(e){
    this.checkLoggedIn();
    e.preventDefault();
    const formData = new FormData();
    formData.append("backing[backer_id]", this.state['backer_id']);
    formData.append("backing[reward_id]", this.state['reward_id']);
    this.props.createBacking(formData)
    this.setState({
      backers: this.state.backers.concat([this.props.currentUser.username])
    })
    e.currentTarget.closest('form').children[0].value = ""


    const thanks = e.currentTarget.nextSibling;
    thanks.classList.remove("thank-you");
    thanks.className = "thank-you-trans";

  }


checkLoggedIn(){
  const currentUser = this.props.currentUser;
  if (currentUser === null){
    this.setState({errors: "Log in or Sign up to back a project"})
    hashHistory.push('/signup')
  } else {
    this.setState({"backer_id": this.props.currentUser.id})
  }
}


update(property){
  return (e) => {
    this.setState({[property]: e.target.value})
  }
}

filterUniqueBackers(backers){
  const uniqueBackers = [];
  for (var i = 0; i < backers.length; i++) {
    if (!uniqueBackers.includes(backers[i].user)){
      uniqueBackers.push(backers[i].user);
    }
  }
  return uniqueBackers.length;
}

  displayBackers(){
    if (this.state.backers !== null){
      const backers = this.state.backers
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
      <div className={this.state.styleClass}>
      <div onClick={this.handleClick}>
      <h2 className="pledge-amt">Contribute ${reward.amount} or more</h2>
      <h3 className="reward-item-name">{reward.title}</h3>
      <div className="reward-item-desc">{reward.body}</div>
      <div className="reward-item-backers">{this.displayBackers()}</div>
      <div className="reward-item-errors">{this.state.errors}</div>
      </div>
      <form className="reward-form" onSubmit={this.handleSubmit}>
        Pledge Amount:
      <input id="reward-input" type="text" placeholder="$" onChange={this.update('amount')}/>
      <input id="submit-button" type="submit" value="Quack Start!"
        className="form-submit-button"/>
      </form>
      <div className="thank-you">
        <h4>wow thanks</h4>
        <img src="https://www.purelypoultry.com/images/silkie-bantam-chickens_04.jpg"/>
      </div>
      </div>
    )
  }
}
