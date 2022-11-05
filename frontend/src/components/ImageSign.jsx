import React, { Component } from 'react';
import * as htmlToImage from 'html-to-image';
import downloadjs from 'downloadjs';
export class ImageSign extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    // profileSign:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  signHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileSign: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  handleDownload = () => {
    htmlToImage.toPng(document.getElementById('img-holder'))
  .then(function (dataUrl) {
    downloadjs(dataUrl, 'my-node.png');
  });
  }

	render() {
    const { profileImg} = this.state
    const { profileSign} = this.state
		return (
			<div className="page">
				<div className="container">
					<h1 className="heading">Add your Image</h1>
					<div className="img-holder" id = "img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
						<img src={profileSign} alt="" id="imgSign" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                    <input type="file" accept="image/*" name="image-upload" id="input1" onChange={this.signHandler} />
          <div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
					
          <label className="image-upload" htmlFor="input1">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Sign
					</label>
          </div>
          <button class = "dwnld_btn" onClick={this.handleDownload}>Download 
          <i className="material-icons">file_download</i>
          </button>
				</div>
			</div>
		);
	}
}

export default ImageSign;