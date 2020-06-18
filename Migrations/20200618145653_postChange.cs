using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class postChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "date",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "header",
                table: "Posts");

            migrationBuilder.AddColumn<string>(
                name: "theme",
                table: "Posts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "theme",
                table: "Posts");

            migrationBuilder.AddColumn<DateTime>(
                name: "date",
                table: "Posts",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "header",
                table: "Posts",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
