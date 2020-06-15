using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class likesDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_likes_Posts_PostId",
                table: "likes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_likes",
                table: "likes");

            migrationBuilder.RenameTable(
                name: "likes",
                newName: "like");

            migrationBuilder.RenameIndex(
                name: "IX_likes_PostId",
                table: "like",
                newName: "IX_like_PostId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_like",
                table: "like",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_like_Posts_PostId",
                table: "like",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_like_Posts_PostId",
                table: "like");

            migrationBuilder.DropPrimaryKey(
                name: "PK_like",
                table: "like");

            migrationBuilder.RenameTable(
                name: "like",
                newName: "likes");

            migrationBuilder.RenameIndex(
                name: "IX_like_PostId",
                table: "likes",
                newName: "IX_likes_PostId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_likes",
                table: "likes",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_likes_Posts_PostId",
                table: "likes",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
