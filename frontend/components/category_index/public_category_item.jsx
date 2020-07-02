import React from 'react'
import { Link } from 'react-router-dom'

class PublicCategoryIdxItem extends React.Component {
  constructor(props) {
    super(props);
    this.splitCatName1 = this.splitCatName1.bind(this);
    this.splitCatName2 = this.splitCatName2.bind(this);
  }

  splitCatName1(str) {
    var lastIndex = str.indexOf("&");
    if (lastIndex !== -1) {
      str =
        str.substring(0, lastIndex + 1) ;
    }
    return str;
  }
  splitCatName2(str) {
    var lastIndex = str.indexOf("&");
    if (lastIndex !== -1) {
      str =
       str.substring(lastIndex + 2, str.length);
    }
    else str="";

    return str;
  }

  render() {
    let { category } = this.props;
    return (
      
        <div className="idx-category-div">
          <Link
            id={"cat_" + category.id}
            className="public-category"
            to={`/categories/${category.id}`}
          >
            {this.splitCatName1(category.name)} <br></br>
            {this.splitCatName2(category.name)}
          </Link>
        </div>
      
    );
  }
}

export default PublicCategoryIdxItem