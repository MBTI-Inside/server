variable "aws_region" {
  description = "AWS region for cicd"
}

variable "access_key_backend_server" {
  description = "Access Key for Backend Server"
}

variable "github_actions_identity_provider_arn" {
  description = "Identity Provider for Github Actions"
}

variable "ecs_image_tag" {
  description = "temp tag for ecs image"
}

variable "nat_instance_access_key" {
  description = "nat instance access key"
}
