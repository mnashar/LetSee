import React from 'react'
import PublicCategoryIdxItem from './public_category_item'
import { withRouter } from 'react-router-dom'

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <ul className="cat-container">
          {this.props.allCategories.map((category) => {
            return (
              <li key={"categoryLi_" + category.id}>
                <div className="grid-item">
                  <PublicCategoryIdxItem
                    category={category}
                    key={category.id}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(CategoryIndex);