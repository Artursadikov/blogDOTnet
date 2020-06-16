using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class postUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "likes",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "pressedLK",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "pressedSD",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "saved",
                table: "Posts");

            migrationBuilder.AddColumn<DateTime>(
                name: "date",
                table: "Posts",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "header",
                table: "Posts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "date",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "header",
                table: "Posts");

            migrationBuilder.AddColumn<int>(
                name: "likes",
                table: "Posts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "pressedLK",
                table: "Posts",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "pressedSD",
                table: "Posts",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "saved",
                table: "Posts",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
