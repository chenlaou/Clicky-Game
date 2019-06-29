import React from "react";

const Row = props =>
<div className={'row${props.flud ? "-fluid" : ""}'}>
{props.children}
</div>

export default Row;

