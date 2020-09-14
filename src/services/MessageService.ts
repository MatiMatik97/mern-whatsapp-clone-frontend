import ApiService from "./ApiService";

const MessageService = () => {};

MessageService.getMessages = async (room_id: string) => {
  try {
    const response = await ApiService.request({
      url: "api/messages/sync",
      method: "GET",
      params: {
        room_id: room_id,
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

MessageService.sendMessage = async (msgData: Message) => {
  try {
    const response = await ApiService.request({
      url: "/api/messages/send",
      method: "POST",
      data: msgData,
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

export default MessageService;
