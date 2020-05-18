// 任务声明
taskDef = {
  // ...
  promised: function(taskResult) {
    return taskResult.y.reduce((total, curr) => total+curr, taskResult.x);
  }
}
 
async function runner() {
  // 你可能需要将taskDef发布到任务中心并得到任务id
  var task = await pedt.register_task(taskDef);
  // await result from taskDef.promised()
  console.log(await pedt.run(task));
}
 
// Done
runner().catch(console.log);
