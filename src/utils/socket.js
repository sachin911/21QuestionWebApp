import socketIoClient from 'socket.io-client';
var socket;

const connectSocket = () => {
	if(!socket){
		// socket = socketIoClient.connect("http://localhost:3000");
	}
}

export { connectSocket, socket};
