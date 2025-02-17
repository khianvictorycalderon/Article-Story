const disableMessageStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
};

export const AdBlockerMessage = () => (
    <div style={{ ...disableMessageStyle }}>
        <h4>
            Please disable your ad blocker to access this website. <br />
            We depend on ads to keep this service free for you. <br />
            We know that you hate bombarding ads, so we keep minimal ads for you.
        </h4>
    </div>
)