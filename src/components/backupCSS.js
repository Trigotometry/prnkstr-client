<div className="container">


  <form onSubmit={ this._handleSubmit } className="gridme">
    <div className="postItlrg postIt" id="nameBox" >
      <label>Now Editing:</label>
      <input className="nameInput" type="text" name="name" value={ this.state.name } onChange={ this._handleChangeName } />
    </div>
    <div className="postItlrg postIt" id="fillMurrayBox">
      <h4 className="textPopper">Fill Murray?</h4>
      <input type="checkbox" onChange={ this._toggleFillMurray } value={ this.state.fill_murray } checked={ this.state.fill_murray } className="inlineBlock" />


    </div>
    <div className="postItlrg postIt" id="placeCageBox">
      <h4 className="textPopper">Place Cage?</h4>
      <input type="checkbox" onChange={ this._togglePlaceCage } value={ this.state.place_cage } checked={ this.state.place_cage } />
    </div>

    <div className=" postIt" id="customHeaderBox">
      <input  type="checkbox" onChange={ this._toggleCustomHeader } value={ this.state.custom_header } checked={ this.state.custom_header } />
      <h5>Custom Headings</h5>
      <input type="text" name="custom_header_text" value={ this.state.custom_header_text } onChange={ this._handleChangeCustomHeaderText } />
      <h6> * Insert Custom Heading Here </h6>
    </div>

    <div className="postItlrg postIt" id="customBackgroundBox">
      <input type="checkbox" name="paragraph_background" value={ this.state.paragraph_background } onChange={ this._handleChangeParagraphBackground } />
      <h5 className="textPopper">Paragraph Background Color</h5>
      <input className="" type="text" name="paragraph_color" value={ this.state.paragraph_color } onChange={ this._handleChangeParagraphColor } />
      <h6 className="textPopper">* Pick a Color</h6>
    </div>


    <div className="postItsml postIt" id="">
      <h5>Stranger Things </h5>
      <input type="checkbox" name="paragraph_background" />
    </div>
    <div className="postItlrg postIt" id="">
      <h5> Flip Page </h5>
      <input type="checkbox" name="paragraph_background" />
    </div>

    <div className="postItsml postIt" id="">
      <h5> Other side</h5>
      <input type="checkbox" name="paragraph_background" />
    </div>

    <div className="postItlrg postIt" id="">
      <h5> Marquee </h5>
      <input type="checkbox" name="paragraph_background" />
      <input type="range" id="marqueeSpeed" name="speed" min="1" max="500" />
      <label>Marque Speed</label>
      <input type="text" id="marqueeElement" name="marqueeElement" value="div" />
      <label >Marque Element</label>
    </div>

    <div className="postItsml postIt" id="">
      <h5> Unicorn Mode </h5>
      <input type="checkbox" name="paragraph_background" />
    </div>

    <div className="postItlrg postIt" id="">
      <h5> Word Swapper </h5>
      <input type="checkbox" name="wordswapper" />
      <input type="text" name="paragraph_background" value="Old word"/>
      <input type="text" name="paragraph_background" value="Replaced word"/>
    </div>

    <div className="postItlrg postIt" id="">
      <h5> Hidden Video </h5>
      <input type="checkbox" name="wordswapper" />
      <input type="text" name="paragraph_background" value="Your video URL"/>
    </div>
