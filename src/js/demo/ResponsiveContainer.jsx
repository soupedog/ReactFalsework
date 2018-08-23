import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";
import CallBackView from "../component/callback/CallBackView.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import {withStyles} from "@material-ui/core/styles/index";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor:"#456789"
    },
});


class ResponsiveContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            callbackTheme: this.StyleHelper.getLightTheme_Blue_Pink(),
            show: true
        }
        console.log("constructor----------");
        console.log(JSON.stringify(props));

    }

    // 初始化子组件
    initCallBackView(CallBackView) {
        this.CallBackView = CallBackView;
    }

    componentWillMount() {
        console.log("componentWillMount----------");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps----------");
        console.log("nextProps:" + JSON.stringify(nextProps));
        console.log("nextContext:" + JSON.stringify(nextContext));
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate----------");
        console.log("nextProps:" + JSON.stringify(nextProps));
        console.log("nextState:" + JSON.stringify(nextState));
        console.log("nextContext:" + JSON.stringify(nextContext));
        return true;
    }

    render() {
        return (
            <div>
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <MuiThemeProvider theme={this.state.callbackTheme}>
                        <CallBackView initCallBackView={this.initCallBackView.bind(this)}/>
                        <div className={this.props.classes.root}>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=12</Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=6</Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=6</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=3</Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </MuiThemeProvider>
                </JssProvider>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount----------");
        console.log("");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate----------");
        console.log("prevProps:" + JSON.stringify(prevProps));
        console.log("prevState:" + JSON.stringify(prevState));
        console.log("snapshot:" + JSON.stringify(snapshot));
        console.log("");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount----------");
    }

}

export default  withStyles(styles)(ResponsiveContainer);