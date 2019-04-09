import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { loadImages } from '../../actions';
import Button from '../Button/Button';
import Stats from '../Stats/Stats';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    constructor() {
        super();
        this.state = {
            number: '',
        };
    }
    componentDidMount() {
        // console.log('refs', this.refs);
    }
    update(e) {
        this.setState({ number: e.target.value });
    }

    render() {
        const {
            images,
            error,
            isLoading,
            loadImages,
            imagesStats,
        } = this.props; // gán tất cả thành các props --> chuẩn bị xuất vào Components

        console.log(isLoading);
        return (
            <div className="content">
                <section className="grid">
                    <Button
                        onClick={() =>
                            loadImages(
                                this.state.number,
                                console.log(this.state.number),
                            )
                        }
                    >
                        Load More
                    </Button>
                    <input
                        placeholder="Nhap so trang"
                        // ref="target"
                        onChange={this.update.bind(this)}
                    />
                    <p>Page: {this.state.number}</p>
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imagesStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}

                    {/* <a onClick={this.props.loadImages}>Load Images</a> */}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    // phát đi tất cả những action (or tín hiệu) khi loadImages được gọi
    loadImages: () => dispatch(loadImages()),
});

const mapStateToProps = ({ isLoading, images, error, imagesStats }) => ({
    // chuyển tất cả state (trong reducer) --> thành props của Component
    isLoading,
    images,
    error,
    imagesStats,
});

export default connect(
    mapStateToProps,
    { loadImages },
)(ImageGrid);
