/*
 * Tbranyen clean script for use with backbone boilerplate
 * https://github.com/tbranyen/build-tasks/blob/master/clean/index.js
 */

var path = require("path");

// ============================================================================
// TASKS
// ============================================================================

task.registerBasicTask("clean", "Deletes out all contents in a directory", function(data, name) {
  var folder = path.resolve(data);

  // Delete all files inside the folder
  task.helper("clean", folder);
});

// ============================================================================
// HELPERS
// ============================================================================

task.registerHelper("clean", function(folder) {
  var rimraf = require("rimraf");

  rimraf.sync(folder);
});
