'use-strict'

const FINISHED = 'finished'
const PENDING = 'pending'
const RUNNING = 'running'

module.exports = {
  ADD_VERSION_ENDPOINT: 'add_version',
  CANCEL_ENDPOINT: 'cancel',
  DELETE_PROJECT_ENDPOINT: 'delete_project',
  DELETE_VERSION_ENDPOINT: 'delete_version',
  LIST_JOBS_ENDPOINT: 'list_jobs',
  LIST_PROJECTS_ENDPOINT: 'list_projects',
  LIST_SPIDERS_ENDPOINT: 'list_spiders',
  LIST_VERSIONS_ENDPOINT: 'list_versions',
  SCHEDULE_ENDPOINT: 'schedule',
  DAEMON_STATUS_ENDPOINT: 'daemonstatus',
  DEFAULT_ENDPOINTS: {
    add_version: '/addversion.json',
    cancel: '/cancel.json',
    delete_project: '/delproject.json',
    delete_version: '/delversion.json',
    list_jobs: '/listjobs.json',
    list_projects: '/listprojects.json',
    list_spiders: '/listspiders.json',
    list_versions: '/listversions.json',
    schedule: '/schedule.json',
    daemonstatus: '/daemonstatus.json'
  },
  JOB_STATES: [FINISHED, PENDING, RUNNING]
}
