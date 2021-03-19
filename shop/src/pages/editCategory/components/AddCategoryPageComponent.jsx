import React from 'react';
import { withRouter } from 'react-router-dom';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import AddCategoryImage from './AddCategoryImageComponent';
import postNewCategory from '../api/post/postNewCategory';

class AddCategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      image: '',
      titleColor: '1',
    };
  }

  updateImage = (value) => { this.setState({ image: value }); }

  render() {
    async function handleButtonClick() {
      const errorImage = document.getElementById('errorNewImage');
      const result = await postNewCategory(categoryName, image, titleColor);
      if (result === true) {
        history.push('/edit-category');
      } if (result === false) {
        errorImage.setAttribute('class', 'errorNewImage');
      }
    }

    const { categoryName, image, titleColor } = this.state;
    const { history } = this.props;
    return (
      <>
        <ConnectedHeader linkItem={<button type="button" className="buttonBack">Назад</button>} link="/personal" disabled={false} />
        <div className="addCategory-box">
          <h2 className="">Добавить категорию</h2>
          <div className="addCategory-container">
            <p className="categoryNameString">Название</p>
            <input
              type="text"
              className="categoryNameInput"
              value={categoryName}
              onChange={(e) => this.setState({ categoryName: e.target.value })}
            />
            <p className="categoryColorString">Цвет заголовка</p>
            <select
              className="imageColors"
              onChange={(event) => this.setState({ titleColor: event.target.value })}
            >
              <option value="1" defaultValue>Фиолетовый</option>
              <option value="2">Коричневый</option>
              <option value="3">Зеленый</option>
            </select>
            <AddCategoryImage updateImage={this.updateImage} />
            <button
              className="addNewCategoryButton"
              type="button"
              onClick={() => handleButtonClick()}
            >
              Добавить
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(AddCategoryPage);
