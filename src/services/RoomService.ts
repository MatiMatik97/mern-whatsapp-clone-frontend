import ApiService from "./ApiService";

const RoomService = () => {};

RoomService.getRooms = async (user_id: string) => {
  try {
    const response = await ApiService.request({
      url: "api/rooms/sync",
      method: "GET",
      params: {
        user_id: user_id,
      },
    });

    return {
      status: "SUCCESS",
      data: response.data,
    };
  } catch (error) {
    console.error(error);

    return {
      status: "ERROR",
      data: error,
    };
  }
};

RoomService.getRoom = async (room_id: string, user_id: string) => {
  try {
    const response = await ApiService.request({
      url: "api/rooms/get",
      method: "GET",
      params: {
        room_id: room_id,
        user_id: user_id,
      },
    });

    return {
      status: "SUCCESS",
      data: response.data,
    };
  } catch (error) {
    console.error(error);

    return {
      status: "ERROR",
      data: error,
    };
  }
};

// MessageService.getCharactersList = async () => {
//     try {
//         const response = await ApiService.request('/api/character/list', {
//             method: 'get',
//             Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
//         });

//         return {
//             status: 'SUCCESS',
//             data: response.data
//         }
//     }
//     catch (error) {
//         console.log(error);
//         return {
//             status: 'ERROR'
//         }
//     }
// };

// MessageService.createCharacter = async (data) => {
//     try {
//         // const response = await ApiService.request('/api/character/create', {
//         await ApiService.request('/api/character/create', {
//             method: 'post',
//             data,
//             Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
//         });

//         return {
//             status: 'SUCCESS',
//             // data: response.data
//         }
//     }
//     catch (error) {
//         console.log(error);
//         return {
//             status: 'ERROR'
//         }
//     }
// };

export default RoomService;
