configData = {
	numChatMax				: 20,
	personalColor			:	/*false*/true,
	badgeVisible			: true,
	themeURI					: "",
	theme							: "jr-west",
	themeName					: "",
	msgExistDuration	: 60,
	msgAniDuration		: 0,
	debugLevel				:	2,
	useDisplayName		: true,
	loadCheerImgs			: true,
	loadTwitchCons		: true,
	consRealSubsOnly	: true,
	loadDcCons				: true,
	dcConsURI					: "",
  subMonthsMsg			: "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
  cheersMsg         : "☆ {!0:{bits} 비트 }후원 ! ☆",
	loadClipPreview		: true,
	clipReplaceMsg		: "[ 클립 ]",
	webSocket					: "wss://irc-ws.chat.twitch.tv:443",
	nick							: "justinfan16831",
	pass							: "foobar",
	channel						: "#quad2378_",
	retryInterval			: 2,
	allMessageHandle	: /*false*/true,
	muteUser					: ["Nightbot", "Stay_Hydrated_Bot"],
	deleteBanMsg			: true,
	commands					: [
		{exe:"clear", msg:"!!clear"},
		{exe:"theme", msg:"!!theme"}
	],
	replaceMsgs				: [
		{orig:/^![a-zA-Z]+/, to:"{no_display}"}			// 봇 호출 영문 메세지 미표시
	]
};