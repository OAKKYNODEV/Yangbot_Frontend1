import { message } from 'antd';
import { useStoreContext } from '../../contexts/StoreContext';
import actionTypes from '../../contexts/StoreContext/actionTypes';
import { imageTypes } from '../../constants';
import {
  getURLExtension, imageSizeFactory, generateXML, exportZip,convertToYoloFormat
} from '../../utils';

function FileTool() {
  const { state, dispatch } = useStoreContext();
  const {
    imageFiles, selDrawImageIndex, imageSizes, drawStatus, shapes, selShapeIndex
  } = state;
  console.log(state)
  
  const openimg = async () => {
    // เรียกใช้ endpoint เพื่อดึงรายการรูปภาพจาก Express.js
    try {
      const response = await fetch('http://localhost:3333/publicimg');
      if (response.ok) {
        const data = await response.json();
        const images = data.images;
        // อัปเดต state ด้วยรายการรูปภาพที่ได้จาก Express.js
        dispatch({
          type: actionTypes.SET_IMAGE_FILES,
          payload: {
            imageFiles: images.map(image => ({
              name: image.name,
              // สร้าง URL สำหรับแสดงรูปภาพจากเซิร์ฟเวอร์ Express.js
              url: image.url,
            })),
            selDrawImageIndex: 0, // หรือค่าที่คุณต้องการ
            imageSizes: images.map(_ => imageSizeFactory({})),
            drawStatus,
            shapes: images.map(_ => []),
            selShapeIndex
          }
        });
        const msg = images.length > 1 ? `${images.length} images` : `${images.length} image`;
        message.success(`Success to load ${msg}.`);
      } else {
        console.error('Failed to fetch images from server');
        message.error('Failed to fetch images from server');
      }
    } catch (error) {
      console.error(error);
      message.error('An error occurred while fetching images');
    }
  };
  
  


  const onUrlClick = async () => {
    dispatch({
      type: actionTypes.SET_URL_BOX_STATUS,
      payload: { urlBoxVisible: true }
    });
  };

  const onNextImageClick = () => {
    if (!imageFiles.length || imageFiles.length < 2) return;
    let index = selDrawImageIndex + 1;
    if (index >= imageFiles.length) index = 0;
    dispatch({ type: actionTypes.SET_SEL_SHAPE_INDEX, payload: { selShapeIndex: null } });
    dispatch({ type: actionTypes.SET_SEL_DRAW_IMAGE_INDEX, payload: { selDrawImageIndex: index } });
  };

  const onPrevImageClick = () => {
    if (!imageFiles.length || imageFiles.length < 2) return;
    let index = selDrawImageIndex - 1;
    if (index < 0) index = imageFiles.length - 1;
    dispatch({ type: actionTypes.SET_SEL_SHAPE_INDEX, payload: { selShapeIndex: null } });
    dispatch({ type: actionTypes.SET_SEL_DRAW_IMAGE_INDEX, payload: { selDrawImageIndex: index } });
  };

  const onSaveClick = () => {
    if (imageFiles.length === 0) {
      message.info('No images are loaded.');
      return;
    }
    
    const xmls = imageFiles.map((file, index) => (
      generateXML(file, imageSizes[index], shapes[index])
    ));
  
    const yoloData = xmls.map((xml) => {
      // แปลง xml เป็น yoloData และ return ค่า yoloData ที่สร้าง
      return convertToYoloFormat(xml);
    });
  
    // เรียกใช้ exportZip และส่งข้อมูลที่ต้องการบันทึก
    exportZip(imageFiles, xmls, yoloData);
  };
  

  return (
    <ul className="file-tool-container">
      <li>

          <span style={{ fontSize: '20px' }} onClick={openimg}>Open</span>
      </li>
      <li>
        <span onClick={onUrlClick} style={{ fontSize: '20px' }}>Open URL</span>
      </li>
      <li>
        <span onClick={onNextImageClick} style={{ fontSize: '20px' }}>Next Image</span>
      </li>
      <li>
        <span onClick={onPrevImageClick} style={{ fontSize: '20px' }}>Prev Image</span>
      </li>
      <li>
        <span onClick={onSaveClick} style={{ fontSize: '20px' }}>Save</span>
      </li>
    </ul>
  );
}

export default FileTool;
