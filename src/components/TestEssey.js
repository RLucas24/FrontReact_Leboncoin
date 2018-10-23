import axios, {post} from 'axios'
import Moment from 'react-moment'
import React, { Component } from 'react';




export default class TestEssey extends React.Component {

    //https://github.com/bharani91/react-select-popover

    constructor(props) {
        super(props);
        this.state = {
            flipped: null,

            //images
            selectedFile: null,

            image: ''
        }

    }



    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const formData = new FormData()
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        console.log(formData)
        //axios.post('my-domain.com/file-upload', formData)
    }

    mouseOut() {
        console.log("Mouse out!!!");
        this.setState({flipped: false});
    }

    mouseOver() {
        console.log("Mouse over!!!");
        this.setState({flipped: true});
    }


    OnChange(e) {
        let files = e.target.flyerFile;

        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            const url = "";
            const formData = { file: e.target.result}
            return post(url, formData)
                .then(response => console.warn("result", response))
        }
    }

    render() {
        const blockOver = flipped => {
            if (flipped === null) {
                return 'Tsy misy';
            }
            return flipped ? <ListCategory/> : 'Category';
        }
        return (
            <div class="">


                <div>
                    <div className='testMety' onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
                        Category
                    </div>
                    <div onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
                        {blockOver(this.state.flipped)}
                    </div>




                    <input style={{display: 'none'}}
                           type="file"
                           onChange={this.fileSelectedHandler}
                           ref={fileInput => this.fileInput = fileInput}/>
                    <br/>
                    <button className="image" onClick={() => this.fileInput.click()}>Pick File</button>
                    <button onClick={this.fileUploadHandler}>Upload</button>
                    <br/> <br/><br/> <br/><br/>

                    <input type="file" ref="flyerFile" name="flyerFile"
                           onChange={(e)=>this.onChange(e)}/><br/>



                </div>
            </div>

        );
    }
}

class ListCategory extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-5 col-md-3">
                    <div class="panel panel-default">
                        <div class="panel-heading custom-header-panel">
                            <h3 class="panel-title custom-title-panel">Véhicules</h3>
                        </div>
                        <div className="panel-body">
                            <form ref="signForm" className="form-group">
                                <fieldset>
                                    <label for="voiture">Voitures</label><br/>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-sm-5 col-md-3">
                    <div class="panel panel-default">
                        <div class="panel-heading custom-header-panel">
                            <h3 class="panel-title custom-title-panel">Mode & Beauté</h3>
                        </div>
                        <div className="panel-body">
                            <form ref="signForm" className="form-group">
                                <fieldset>
                                    <label for="adresse">Vetement Homme</label>



                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


